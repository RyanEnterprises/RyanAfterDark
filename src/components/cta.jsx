export default function Example() {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-primary">Get In Touch Today</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-primary hover:text-white hover:bg-primary"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/blog"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primary-600 text-primary hover:text-white hover:bg-primary"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  