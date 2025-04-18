"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

export default function WaitlistSection() {
  const [merchantSubmitted, setMerchantSubmitted] = useState(false)
  const [customerSubmitted, setCustomerSubmitted] = useState(false)

  const handleMerchantSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMerchantSubmitted(true)
  }

  const handleCustomerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCustomerSubmitted(true)
  }

  return (
    <section id="waitlist" className="py-20 container z-10 rounded-2xl backdrop-blur-md bg-white/10 shadow-xl border border-black/20 dark:border-white/20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Waitlist</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Be among the first to experience our QR payment solution.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <Tabs defaultValue="merchant" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="merchant">For Merchants</TabsTrigger>
            <TabsTrigger value="customer">For Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="merchant">
            {merchantSubmitted ? (
              <div className="text-center p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've added you to our merchant waitlist. We'll be in touch soon with more information.
                </p>
              </div>
            ) : (
              <form onSubmit={handleMerchantSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="merchant-name">Business Name</Label>
                  <Input id="merchant-name" placeholder="Your business name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="merchant-email">Business Email</Label>
                  <Input id="merchant-email" type="email" placeholder="email@business.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="merchant-phone">Phone Number</Label>
                  <Input id="merchant-phone" type="tel" placeholder="(123) 456-7890" />
                </div>
                <Button type="submit" className="w-full">
                  Join Merchant Waitlist
                </Button>
              </form>
            )}
          </TabsContent>

          <TabsContent value="customer">
            {customerSubmitted ? (
              <div className="text-center p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've added you to our customer waitlist. We'll notify you when our app is ready.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCustomerSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="customer-name">Full Name</Label>
                  <Input id="customer-name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customer-email">Email Address</Label>
                  <Input id="customer-email" type="email" placeholder="your@email.com" required />
                </div>
                <Button type="submit" className="w-full">
                  Join Customer Waitlist
                </Button>
              </form>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}


