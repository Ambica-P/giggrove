"use client";
import Link from "next/link"
import { useRouter } from "next/navigation";
import {
  Activity,
  CreditCard,
  Plus,
  DollarSign,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
export function Dashboard3() {
  const route = useRouter();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-1 md:gap-8 md:p-8">
        <div className="grid gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Spending
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>



        <div className="gap-4 md:gap-8 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Jobs</CardTitle>
                <CardDescription>
                  All jobs posted
                </CardDescription>
              </div>

              {/* Create New Job */}
              {/* <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="/form">
                  Create Job
                  <Plus className="h-4 w-4" />
                </Link>
              </Button> */}
              {/* Create New Job */}
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="/form">
                  Create Job
                  <Plus className="h-4 w-4" />
                </Link>
              </Button>

            </CardHeader>

             {/* Job list  */}

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                  <TableHead>Jobs</TableHead>
                  {/* <TableHead>Workers</TableHead> */}
                  <TableHead >
                      Type
                    </TableHead>
                    <TableHead >
                      Status
                    </TableHead>
                    <TableHead >
                      Date
                    </TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">
                          <button className="hover:text-slate-400" onClick={()=>{route.push("/machineLearning")}}>Machine Learning</button>
                      </div>
                      <div className=" text-sm text-muted-foreground md:inline">
                        John Smith 
                      </div>
                    </TableCell>
                    <TableCell >
                      Sale
                    </TableCell>
                    <TableCell >
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell >
                      2023-06-23
                    </TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Olivia Smith</div>
                      <div className=" text-sm text-muted-foreground md:inline">
                        olivia@example.com
                      </div>
                    </TableCell>
                    <TableCell >
                      Refund
                    </TableCell>
                    <TableCell >
                      <Badge className="text-xs" variant="outline">
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell >
                      2023-06-24
                    </TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Noah Williams</div>
                      <div className=" text-sm text-muted-foreground md:inline">
                        noah@example.com
                      </div>
                    </TableCell>
                    <TableCell >
                      Subscription
                    </TableCell>
                    <TableCell >
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell >
                      2023-06-25
                    </TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Emma Brown</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        emma@example.com
                      </div>
                    </TableCell>
                    <TableCell >
                      Sale
                    </TableCell>
                    <TableCell >
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell >
                      2023-06-26
                    </TableCell>
                    <TableCell className="text-right">$450.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Liam Johnson</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        liam@example.com
                      </div>
                    </TableCell>
                    <TableCell >
                      Sale
                    </TableCell>
                    <TableCell >
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell >
                      2023-06-27
                    </TableCell>
                    <TableCell className="text-right">$550.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>




     


        </div>
      </main>
    </div>
  )
}
