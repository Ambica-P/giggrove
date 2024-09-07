// import {
//     DollarSign,
//   MoreHorizontal,
// } from "lucide-react"
// import { Badge } from "@/components/ui/badge"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"
// export function Dashboard2() {
//   return (
//     <div className="flex min-h-screen w-full flex-col bg-muted/40 mt-10">
//         {/* <main className="grid flex-1 items-center sm:px-6 sm:py-0 md:gap-8 p-10"> */}
//       <main className="flex flex-1 flex-col gap-1 md:gap-8 md:p-8">

//         <div className="grid gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
//         <Card x-chunk="dashboard-01-chunk-0">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 Total Spending
//               </CardTitle>
//               <DollarSign className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
            
//             <CardContent>
//               <div className="text-2xl font-bold">$45,231.89</div>
//               <p className="text-xs text-muted-foreground">
//                 +20.1% from last month
//               </p>
//             </CardContent>
//           </Card>
//             </div>

//         {/* Payments */}
//           <Tabs defaultValue="all">
//             <TabsContent value="all">
//               <Card x-chunk="dashboard-06-chunk-0">
//                 <CardHeader>
//                   <CardTitle>Payments</CardTitle>
//                   <CardDescription>
//                     Manage your payments and view your payment history
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
                        
//                         <TableHead>Job</TableHead>
//                         <TableHead>Status</TableHead>
//                         <TableHead className="hidden md:table-cell">
//                           Amount
//                         </TableHead>
//                         <TableHead className="hidden md:table-cell">
//                           Initiated at
//                         </TableHead>
//                         <TableHead>
//                           <span className="sr-only">Actions</span>
//                         </TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       <TableRow>
                        
//                         <TableCell className="font-medium">
//                           Laser Lemonade Machine
//                         </TableCell>
//                         <TableCell>
//                           <Badge variant="outline">Draft</Badge>
//                         </TableCell>
//                         <TableCell className="hidden md:table-cell">
//                           $499.99
//                         </TableCell>
                       
//                         <TableCell className="hidden md:table-cell">
//                           2023-07-12 10:42 AM
//                         </TableCell>
//                         <TableCell>
//                           <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                               <Button
//                                 aria-haspopup="true"
//                                 size="icon"
//                                 variant="ghost"
//                               >
//                                 <MoreHorizontal className="h-4 w-4" />
//                                 <span className="sr-only">Toggle menu</span>
//                               </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                               <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                               <DropdownMenuItem>Edit</DropdownMenuItem>
//                               <DropdownMenuItem>Delete</DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                         </TableCell>
//                       </TableRow>
                      
//                     </TableBody>
//                   </Table>
//                 </CardContent>
//                 <CardFooter>
//                   <div className="text-xs text-muted-foreground">
//                     Showing <strong>1-10</strong> of <strong>32</strong>{" "}
//                     products
//                   </div>
//                 </CardFooter>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </main>
//       </div>
  
//   )
// }