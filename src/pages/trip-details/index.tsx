import { Calendar, MapPin, Plus, Settings2 } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";

export function TripDetailsPage() {
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

    function openCreateActivityModal() {
        setIsCreateActivityModalOpen(true)
    }
    function closeCreateActivityModal() {
        setIsCreateActivityModalOpen(false)
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            {/* cabeçalho */}
            <DestinationAndDateHeader/>

            {/* parte principal */}
            <main className="flex gap-16 px-4">

                {/*primeiro container*/}
                <div className="flex-1 space-y-6">
                    {/* titulo container */}
                    <div className="flex items-center  justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <button onClick={openCreateActivityModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                            Cadastrar Atividade
                            <Plus className="size-5" />
                        </button>
                    </div>

                    {/* Atividades */}
                    <Activities />
                </div>

                {/* segundo container */}
                <div className="w-80 space-y-6">
                    {/* links importantes */}

                    <ImportantLinks />

                    {/* divisor */}
                    <div className="w-full h-px bg-zinc-800" />

                    {/* convidados */}
                    <Guests />
                </div>
            </main>

            {/* Modal de cadastro de atividade */}
            {isCreateActivityModalOpen && (
                <CreateActivityModal
                    closeCreateActivityModal={closeCreateActivityModal}
                />
            )}

        </div>

    )
}