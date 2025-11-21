import { currentUser } from "@clerk/nextjs/server"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CreditCard, Plus, History, Wallet } from "lucide-react"

export default async function PaymentsPage() {
  const user = await currentUser()

  // Mock data for transaction history
  const transactions = [
    {
      id: "TRX-9871",
      date: "2024-05-15",
      description: "Trip to Paris",
      amount: "$1,200.00",
      status: "Completed",
    },
    {
      id: "TRX-9872",
      date: "2024-06-02",
      description: "Flight Upgrade",
      amount: "$150.00",
      status: "Completed",
    },
    {
      id: "TRX-9873",
      date: "2024-06-10",
      description: "Travel Insurance",
      amount: "$85.00",
      status: "Pending",
    },
  ]

  return (
    <div className='container mx-auto py-10 px-4 space-y-8 pt-28'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold tracking-tight'>
          Payments & Billing
        </h1>
        <p className='text-muted-foreground'>
          Manage your payment methods and view your transaction history.
        </p>
      </div>

      <Separator />

      <div className='grid gap-8 md:grid-cols-2'>
        {/* Overview Section */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Wallet className='h-5 w-5' />
              Overview
            </CardTitle>
            <CardDescription>Your billing summary</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex items-center justify-between rounded-lg border p-4'>
              <div className='space-y-0.5'>
                <label className='text-sm font-medium leading-none'>
                  Account Holder
                </label>
                <p className='text-sm text-muted-foreground'>
                  {user?.firstName} {user?.lastName}
                </p>
                <p className='text-xs text-muted-foreground'>
                  {user?.emailAddresses[0]?.emailAddress}
                </p>
              </div>
            </div>
            <div className='flex items-center justify-between rounded-lg border p-4'>
              <div className='space-y-0.5'>
                <label className='text-sm font-medium leading-none'>
                  Current Balance
                </label>
                <p className='text-2xl font-bold'>$0.00</p>
              </div>
              <Button size='sm'>Pay Balance</Button>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods Section */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <CreditCard className='h-5 w-5' />
              Payment Methods
            </CardTitle>
            <CardDescription>Manage your saved cards</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex items-center space-x-4 rounded-md border p-4'>
              <CreditCard className='h-6 w-6 text-muted-foreground' />
              <div className='flex-1 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Visa ending in 4242
                </p>
                <p className='text-sm text-muted-foreground'>Expires 12/24</p>
              </div>
              <Button variant='outline' size='sm'>
                Edit
              </Button>
            </div>
            <Button className='w-full'>
              <Plus className='mr-2 h-4 w-4' /> Add Payment Method
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History Section */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />
            Transaction History
          </CardTitle>
          <CardDescription>Recent transactions and invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className='text-right'>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className='font-medium'>
                    {transaction.id}
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.status}</TableCell>
                  <TableCell className='text-right'>
                    {transaction.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
