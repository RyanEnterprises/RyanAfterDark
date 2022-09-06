/* This example requires Tailwind CSS v2.0+ */
import chat from '../../node_modules/bootstrap-icons/icons/chat-right-dots.svg'
import XMarkIcon from '../../node_modules/bootstrap-icons/icons/x-circle.svg'

export default function Example() {
    return (
    <div className="bg-primary dark:bg-tertiary sticky top-0">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-white p-2">
                <img src={chat} className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">The Blog is Alive</span>
                <span className="hidden md:inline">Big news! We're excited to announce that our blog is now active!</span>
            </p>
            </div>
            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a
                href="/blog"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
            >
                Visit it!
            </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
                type="button"
                className="-mr-1 flex rounded-md p-2 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
                <span className="sr-only">Dismiss</span>
                <img src={XMarkIcon} className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
            </div>
        </div>
        </div>
    </div>
    )
}
