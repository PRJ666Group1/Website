"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
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
  const [success, setSuccess] = useState(false);

  // Watch for changes in the form fields and clear warnings
  useEffect(() => {
    const subscription = watch(() => {
      if (warning.length > 0) setWarning([]);
    });

    return () => subscription.unsubscribe();
  }, [watch, warning]);

  async function submitRegister(data) {
    const { username, email, password, confirmPassword } = data;

    const errors = [];

    if (password != confirmPassword) errors.push("Passwords do not match.");
    if (username.length < 3) errors.push("Username must be at least 3 characters.");
    if (password.length < 8) errors.push("Password must be at least 8 characters.");

    if (errors.length > 0) {
      setWarning(errors);
      setSuccess(false);
      return;
    }

    // Prepare the data for the API request
    const requestBody = {
      username,
      email,
      password,
    };

    try {
      // Send POST request to the registration API route
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      // Check if the response is OK
      if (!response.ok) {
        const errorData = await response.json();
        setWarning([errorData.error || "Something went wrong."]);
        setSuccess(false);
        return;
      }

      // Handle successful response
      const data = await response.json();
      console.log("User registered:", data);

      setSuccess(true);
      // Optionally, handle further actions (e.g., redirect, display success message)
    } catch (error) {
      console.error("Error submitting registration:", error);
      setWarning(["An unexpected error occurred."]);
      setSuccess(false);
    }
  }

  return (
    <>
      <Header />
      <Container size="md" mt="xl" mb="xl">
        {warning.length != 0 && (
          <Alert
            title={success ? "Success!" : "Error"}
            icon={<IoInformationCircleOutline />}
            mb="md"
            color={success ? "green" : "red"}
            classNames={{ title: classes.title, icon: classes.icon }}>
            <List size="sm">
              {warning.map((warn, index) => (
                <List.Item key={index}>{warn}</List.Item>
              ))}
            </List>
          </Alert>
        )}
        {success && (
          <Alert
            title="Success!"
            icon={<IoInformationCircleOutline />}
            mb="md"
            color="green"
            classNames={{ title: classes.title, icon: classes.icon }}>
            Your account has been created. You can now log in.
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
