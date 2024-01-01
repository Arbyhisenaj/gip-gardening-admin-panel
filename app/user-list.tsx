import User from "./interface/interface";


export default function UsersList({ users }: { users: User[] }) {
    return (
        <div>
          {users.map((user) => (
            <div key={user.id} className="">
                <div className="mb-4">
                    <p className="text-b text-neutral-500">Name</p>
                    <p className="text-xl">{user.name}</p>
                </div>
                <div>
                    <p className="text-b text-neutral-500">Name</p>
                    <p className="text-xl">{user.name}</p>
                </div>
            </div>
            
          ))}
        </div>
    );
  }