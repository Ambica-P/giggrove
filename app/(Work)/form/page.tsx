"use client"
import {z} from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  JobTitle: z.string().min(1, {
    message: "Mandatory Field",
  }),
  JobDesc: z.string().min(1, {
    message: "Mandatory Field",
  }),
  MinExp: z.string().min(1, {
    message: "Mandatory Field",
  }),
})

export default function form() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      JobTitle: "",
      JobDesc: "",
      MinExp: "",

    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className='p-10'>

    <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

       <FormField
            control={form.control}
            name="JobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Job Title*</FormLabel>
                <FormControl> 
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="JobDesc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Job Description*</FormLabel>
                <FormControl> 
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="MinExp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Minimum Experience*</FormLabel>
                <FormControl> 
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

             <Button type="submit">Submit</Button>

        </form>
     </Form> 
     </div>
  )
}
