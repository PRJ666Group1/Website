"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Container,
  Title,
  Text,
  Card,
  Group,
  Flex,
  TextInput,
  PasswordInput,
  Stack,
  Button,
  Image,
  Alert,
  List,
} from "@mantine/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NextLink from "next/link";

import { IoInformationCircleOutline } from "@react-icons/all-files/io5/IoInformationCircleOutline";
import { FaRegEye } from "@react-icons/all-files/fa/FaRegEye";
import { FaRegEyeSlash } from "@react-icons/all-files/fa/FaRegEyeSlash";

import classes from "./registration.module.css";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [warning, setWarning] = useState([]);

  function submitRegister(data) {
    const { username, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setWarning(["Passwords do not match"]);
      return;
    }

    // Do something with the data
    console.log(data);
  }

  return (
    <>
      <Header />
      <Container size="md" mt="xl" mb="xl">
        {warning.length != 0 && (
          <Alert
            title="Error"
            icon={<IoInformationCircleOutline />}
            mb="md"
            color="red"
            classNames={{ title: classes.title, icon: classes.icon }}>
            <List size="sm">
              {warning.map((warn, index) => (
                <List.Item key={index}>{warn}</List.Item>
              ))}
            </List>
          </Alert>
        )}

        <Card className={classes.card}>
          <Flex className={classes.primaryContainer}>
            <Flex className={classes.formContainer}>
              <Group justify="center" align="flex-start" flex={0.5}>
                <Title order={2} mb="md">
                  Registration
                </Title>
              </Group>

              <form id="registerForm" onSubmit={handleSubmit(submitRegister)}>
                <TextInput
                  autoFocus
                  {...register("username", { required: true })}
                  placeholder="* Username"
                  autoComplete="username"
                />

                <TextInput
                  {...register("email", { required: true })}
                  mt="xl"
                  type="email"
                  placeholder="* Email"
                  autoComplete="email"
                />

                <PasswordInput
                  {...register("password", { required: true })}
                  mt="xl"
                  placeholder="* Password"
                  type="password"
                  autoComplete="new-password"
                  visibilityToggleIcon={({ reveal }) => (reveal ? <FaRegEyeSlash /> : <FaRegEye />)}
                />

                <PasswordInput
                  {...register("confirmPassword", { required: true })}
                  mt="sm"
                  placeholder="* Confirm Password"
                  type="password"
                  autoComplete="new-password"
                  visibilityToggleIcon={({ reveal }) => (reveal ? <FaRegEyeSlash /> : <FaRegEye />)}
                />
              </form>

              <Stack justify="flex-end" align="center" flex={1} mt="lg">
                <Button color="green" form="registerForm" type="submit" fullWidth size="lg">
                  Register
                </Button>
                <Text size="sm">
                  Already have an account?{" "}
                  <Text component={NextLink} href="/login" c="blue" span inherit>
                    Login
                  </Text>
                </Text>
              </Stack>
            </Flex>

            <Image className={classes.image} src="/assets/registration_image.jpg" alt="registration image" />
          </Flex>
        </Card>
      </Container>
      <Footer />
    </>
  );
}
