import { CircleDashed, Plus, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                {/* item  link */}
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Dr Jessica</span>
                        <span className="block text-sm text-zinc-400 truncate ">
                            jesscia.wig@gmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 flex-shrink-0" />
                </div>
                {/* item  link */}
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Joana</span>
                        <span className="block text-sm text-zinc-400 truncate ">
                            joana@dar.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 flex-shrink-0" />
                </div>


            </div>

            

            <Button variant="secondary" size="full">
                <UserCog className="size-5" />
                Gerenciar Convidados
            </Button>

        </div>
    )
}