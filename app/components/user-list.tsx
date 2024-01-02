'use client'
import Customer from "../interface/interface";
import { Card, Button, Divider, Switch } from "@tremor/react";
import CustomerMapbox from "./customer-mapbox";



export default function UsersList({ users }: { users: Customer[] }) {

    const handleEmailClick = (email: string) => {
        window.location.href = `mailto:${email}`;
    };
    const handlePhoneClick = (phone: string) => {
        window.location.href = `tel:${phone}`;
    };

    const handleTextClick = (phone: string) => {
        // Format the phone number (remove non-numeric characters)
        const formattedPhone = phone.replace(/\D/g, '');
    
        // Open WhatsApp with the formatted phone number
        window.location.href = `https://wa.me/${formattedPhone}`;
    };

    const handleDirectionsClick = (postcode: string) => {
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${postcode}`;
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <div className="">
            {users.map((user) => (
                <Card key={user.id} className="mt-6">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                        <div>
                            <div className="md:grid md:grid-cols-2 flex-row gap-6 ">
                                <div className="mb-4">
                                    <p className="text-b text-neutral-400 text-sm uppercase">Name</p>
                                    <p className="text-2xl font-extrabold uppercase">{user.name}</p>
                                </div>
                                <div className="mb-4 flex gap-3 align-middle">
                                    <div>
                                        <p className="text-b text-neutral-400 text-sm uppercase">Postcode</p>
                                        <p className="text-xl uppercase mb-2">{user.postcode || "-"}</p>
                                    </div>
                                    <div className="mt-2">
                                        <Button variant="secondary" size="xs" onClick={() => handleDirectionsClick(user.postcode)} className="">Directions</Button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p className="text-b text-neutral-400 text-sm uppercase">Email</p>
                                    <p className="text-xl break-all	">{user.email}</p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-b text-neutral-400 text-sm uppercase">Phone</p>
                                    <p className="text-xl">{user.phone || "-"}</p>
                                </div>
                                <div className="mb-4 col-span-2 text-sm">
                                    <Divider>Message</Divider>
                                    <p className="text-xs max-w-prose">{user.message || "-"}</p>

                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="secondary" onClick={() => handleEmailClick(user.email)}>
                                    Email
                                </Button>
                                <Button variant="secondary" onClick={() => handlePhoneClick(user.phone)}>
                                    Phone
                                </Button>
                                <Button variant="secondary" onClick={() => handleTextClick(user.phone)}>
                                    WhatsApp
                                </Button>
                                <Switch />
                            </div>
                            <div className="text-sm uppercase mt-8 text-neutral-400">
                                Received: {user.createdAt.toLocaleString('en-UK', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })}
                            </div>
                        </div>
                        <CustomerMapbox postcode={user.postcode} />
                    </div>
                </Card>
            ))}
        </div>
    );
}