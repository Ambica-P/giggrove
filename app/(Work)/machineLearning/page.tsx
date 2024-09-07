"user client"
import { Button } from "@/components/ui/button"
import { BACKEND_URL } from "@/utils"
import axios from "axios"
import { useEffect } from "react"
// import { Myjobs } from "@/components/Myjobs"
import PageTitle from "@/components/ui/PageTitle"
import { Dashboard } from "@/components/ui/Dashboard"
import Link from "next/link"
import { useRouter } from "next/navigation";
import {
  Activity,
  CreditCard,
  Plus,
  DollarSign,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
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
import { Component } from "@/components/ui/charts"
const machineLearning = () => {
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
              {/* <Component /> */}
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          {/* Active Contracts */}
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">All Contracts</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>


          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
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
                <CardTitle>Bids</CardTitle>
                <CardDescription>
                  Bids for this job 
                </CardDescription>
              </div>

              {/* Create New Job */}


            </CardHeader>

             {/* Job list  */}

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                   <TableHead>Bids</TableHead>
                   <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                  <TableCell>
                      <div className="font-medium">
                        John Smith 
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Profile 
                      </div>
                    </TableCell>

                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow><TableRow>
                  <TableCell>
                      <div className="font-medium">
                        John Smith 
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Profile 
                      </div>
                    </TableCell>

                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                      <div className="font-medium">
                        John Smith 
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Profile 
                      </div>
                    </TableCell>

                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                      <div className="font-medium">
                        John Smith 
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Profile 
                      </div>
                    </TableCell>

                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                      <div className="font-medium">
                        John Smith 
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Profile 
                      </div>
                    </TableCell>

                    <TableCell className="text-right">$250.00</TableCell>
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
export default machineLearning