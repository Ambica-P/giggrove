"use client"
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import Link from "next/link";

const SignupValidation = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export default function SignupForm() {
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignupValidation>) {
    console.log(values);
  }
  // const route=useRouter();

  return (
    <div className="flex items-center justify-center px-4 min-h-screen">
      <div className="p-5 w-full max-w-md">
        <Form {...form}>
          <div className="flex flex-col items-center">
            <button className="flex items-center justify-center mb-7">
              <img
                src="/logoplz.jpeg"
                alt="Logo"
                className="h-32 w-32 sm:h-32 sm:w-32 md:h-36 md:w-36 object-contain"
              />
            </button>

            <h2 className="text-xl md:text-3xl font-bold text-center">Create new account</h2>
            <p className="text-center mt-2">
              Access Skilled Freelancers, Anytime, Anywhere
            </p>

            <div className="p-5">
              <Button className="flex items-center justify-center gap-2">
                <img
                  src="/google.png"
                  alt="Google"
                  className="h-6 w-6 object-contain"
                />
                Sign-up with Google
              </Button>
            </div>

            <div className="flex items-center my-4 w-full">
              <div className="flex-grow border-t border-gray-300 border-1"></div>
              <span className="px-4 text-gray-500">or Sign-up with Email</span>
              <div className="flex-grow border-t border-gray-300 border-1"></div>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Name</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
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
                    <FormLabel className="shad-form_label">Email</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
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
                    <FormLabel className="shad-form_label">Password</FormLabel>
                    <FormControl>
                      <Input type="password" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="justify-centre items-center shad-button_primary w-full">
                <Link 
                  href="OnboardingForm"                  > 
                  Sign Up 
                </Link>
              </Button>


              <p className="text-small-regular text-light-2 text-center mt-2">
                Already have an account?
                <Link
                  href="/sign-in"
                  className="text-blue-500 text-small-semibold ml-1"> 
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </Form>
      </div>
    </div>
  );
}
