"use server";

import { connect, disconnect } from "@/lib/db";
import Information from "@/model/create";
import { z } from "zod";

const InfoSchema = z.object({
  // Begge input skal have en bestem datatype, min. krav og en error message
  name: z.string().min(1, { message: "You must provide an Email address" }),
  age: z.string().min(1, { message: "Must be at least 4 characters long" }),
});

export async function formulaPerson() {
  const name = formData.get("name");
  const age = formData.get("age");

  const validated = InfoSchema.safeParse({ name, age });

  //   Tjekker om formuilaren er blevet udfyldt korrekt, hvis IKKE skal der poope en error frem
  if (!validated.success) {
    return validated.error.format();
  }

  // For at fejlsikre kan dette prøves for at se at der er forbindelse til databasen
  try {
    await connect();
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Internal server error, Book was not created - try again.",
    };
  }

  const person = new Information({
    name: name,
    age: age,
  });

  // 
  try {
    await person.save();
  } catch (error) {
    console.log(error);
    await disconnect();
    return {
      success: false,
      message: "Internal server error, Book was not created - try again.",
    };
  }

  await disconnect();

  return { success: true };
}
