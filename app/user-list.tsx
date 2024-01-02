import Customer from "./interface/interface";
import { Card, Button } from "@tremor/react";
import CustomerMapbox from "./customer-mapbox";



export default function UsersList({ users }: { users: Customer[] }) {

    return (
        <div className="">
            {users.map((user) => (
                <Card className="mt-6">
                        <div key={user.id} className="grid grid-cols-2">
                            <div className="">
                                <div className="mb-4">
                                    <p className="text-b text-neutral-400 text-sm uppercase">Name</p>
                                    <p className="text-xl font-extrabold uppercase">{user.name}</p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-b text-neutral-400 text-sm uppercase">Email</p>
                                    <p className="text-xl">{user.email}</p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-b text-neutral-400 text-sm uppercase">Phone</p>
                                    <p className="text-xl">{user.phone || "-"}</p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-b text-neutral-400 text-sm uppercase">Postcode</p>
                                    <p className="text-xl uppercase">{user.postcode || "-"}</p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-b text-neutral-400 text-sm uppercase">Message</p>
                                    <p className="text-xl">{user.message || "-" }</p>
                                </div>
                                <div className="flex gap-2">
                                <Button variant="secondary">Email</Button>
                                <Button variant="secondary">Phone</Button>
                                <Button>Directions</Button>
                                </div>
                            </div>
                            <CustomerMapbox postcode={user.postcode}/>
                        </div>
                </Card>

            ))}
        </div>
    );
}