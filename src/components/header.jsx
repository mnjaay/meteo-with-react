import React from 'react'

function Header() {
  return (
    <div>
        <header
    class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div class="px-4">
        <div class="flex items-center justify-between">
            <div class="flex shrink-0">
                <a aria-current="page" class="flex items-center" href="/">
                    <img class="h-7 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4slKBTL-_oSCH9tZH3GiqtNs1mAQs1YXKwZobxxmzhQ&s" alt=""/>
                    <p class="sr-only">Website Title</p>
                </a>
            </div>
           
        </div>
    </div>
</header>
    </div>
  )
}

export default Header