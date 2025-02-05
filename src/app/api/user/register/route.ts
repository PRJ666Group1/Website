import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import pool from "@/lib/db";

const checkExisting = async (field: string, value: string) => {
  try {
    const query = `SELECT * FROM users WHERE ${field} = $1`;
    const result = await pool.query(query, [value]);

    // Value exists
    if (result.rows.length > 0) return result.rows[0];

    // No record found
    return null;
  } catch (err) {
    console.error("Error checking for existing user:", err);
    return null;
  }
};

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    console.log("Checking for existing user with username: " + username);

    if ((await checkExisting("username", username)) != null) {
      return NextResponse.json(
        { error: "User '" + username + "' already exists. Please choose another username." },
        { status: 400 }
      );
    }

    if ((await checkExisting("email", email)) != null) {
      return NextResponse.json({ error: "Email '" + email + "' is already in use." }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *", [
      username,
      email,
      hashedPassword,
    ]);

    const newUser = result.rows[0];

    return NextResponse.json(
      {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        created_at: newUser.created_at,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
