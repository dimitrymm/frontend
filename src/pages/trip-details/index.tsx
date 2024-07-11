import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { Button } from "../../components/button";

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
            <DestinationAndDateHeader />

            {/* parte principal */}
            <main className="flex gap-16 px-4">

                {/*primeiro container*/}
                <div className="flex-1 space-y-6">
                    {/* titulo container */}
                    <div className="flex items-center  justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>

                        <Button onClick={openCreateActivityModal} variant="primary">
                            Cadastrar Atividade
                            <Plus className="size-5" />
                        </Button>

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