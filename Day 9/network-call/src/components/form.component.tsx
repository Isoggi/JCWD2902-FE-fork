/** @format */

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/config/axios.config";
import { useEffect } from "react";
import { THero } from "./heroes.component";
import { useEffect } from "react";
import { THero } from "./heroes.component";

const formSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(10, {
    message: "Username must be at least 10 characters.",
  id: z.number().nullable(),
  name: z.string({ message: "Bukan string vlog" }).min(10, {
    message: "10 minimalnya abangku.",
  }),
  username: z.string().min(5, { message: "Minimal 5 lah" }),
});

interface Props {
  fetch: () => Promise<void>;
  editedHero: THero;
}

export function HeroForm({ fetch, editedHero }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      id: undefined,
    },
    defaultValues: {
      name: "",
      id: undefined,
      username: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (form.getValues("id")) {
      await api.patch("/superheroes/" + values.id, values);
    } else {
      await api.post("/superheroes", values);
    }
    form.control._reset();
    console.log(values);
    if (form.getValues("id"))
      await api.patch(`/superheroes/${values.id}`, values);
    else await api.post("/superheroes", values);
    form.control._reset();
    await fetch();
  };
  useEffect(() => {
    if (editedHero) {
      form.setValue("id", editedHero.id);
      form.setValue("name", editedHero.name ?? "");
      form.setValue("username", editedHero.username ?? "");
    }
  }, [editedHero]);

  useEffect(() => {
    if (editHero?.name && editHero?.id) {
      form.setValue("name", editHero.name);
      form.setValue("id", editHero.id);
    }
  }, [editHero]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-screen-sm text-left "
      >
        {form.getValues("id")}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="apaya" {...field} />
              </FormControl>
              <FormDescription>This is your superhero name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <FormControl>
                <Input placeholder="apatu" {...field} />
              </FormControl>
              <FormDescription>This is your superhero color.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
