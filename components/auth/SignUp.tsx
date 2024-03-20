"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import z from "zod";
import { createUser } from "@/lib/sadida/actions/user";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "../ui/use-toast";
import LoadingDots from "../LoadingDot";
import Link from "next/link";
const SignUpFormSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "Username must be at least 3 characters.",
      })
      .max(20, {
        message: "Username must not be longer than 20 characters.",
      }),
    email: z.string().email({ message: "Invalid email." }),
    password: z.string().min(3, {
      message: "Password must be at least 3 characters.",
    }),
    confirmPassword: z.string().min(3),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "The passwords did not match",
      });
    }
  });

const SignUp = () => {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
  });

  function onSubmit(data: z.infer<typeof SignUpFormSchema>) {
    startTransition(async () => {
      const userInfo = await createUser({
        name: data.name,
        password: data.password,
        email: data.email,
      })
        .then(() => {
          toast({
            title: "Sign up success",
            description: "Welcome to Sadida house!",
          });
          router.push("/auth/signin");
        })
        .catch((err) => {
          //showing popup
          toast({
            title: "Sign up failed",
            description: "No matching credentials",
            variant: "destructive",
          });
        });
    });
  }
  return (
    <Card className="md:w-1/2">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Enter your credentials.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <CardContent className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john_smith@mail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button disabled={isPending} type="submit">
              Sign Up {isPending && <LoadingDots className="mb-3 bg-white" />}
            </Button>
            <span className="text-slate-500">
              have an account?
              <Link
                href="/auth/signin"
                className="text-blue-500 underline hover:text-blue-300 "
              >
                {" "}
                Sign In
              </Link>
            </span>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default SignUp;
