import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessSentPops {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
    onFeedbackRestartRequested,
}: FeedbackSuccessSentPops) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <div></div>

                <span className="text-xl nt-2">Agradecemos seu feedback!</span>

                <button
                    onClick={onFeedbackRestartRequested}
                    className="py-2 px-6 nt-6 bg-zinc-800 rounded-nd border-transparent text-sm loading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-zinc-900 focus:ring-purple-500"
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    );
}
