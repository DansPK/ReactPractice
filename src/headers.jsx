import { IoIosSearch } from "react-icons/io";


export default function headers() {
  return (
    <header className='px-3 py-2'>
        <nav>
            <ol className='list-none flex flex-row justify-between  items-center font-display '>
                <li>
                    <img src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91" height="34" loading="lazy"></img>
                </li>
                <li>
                    Explore
                </li>
                <li>
                    Subscribe
                </li>

                <li>
                    <div id='search-navbar' className='flex flex-row justify-start items-center gap-3 border border-gray-300 rounded-4xl w-100 py-3 px-5'>
                        <input type="text" placeholder=""/>
                        <IoIosSearch />
                        <div>
                            Search for anything
                        </div>
                    </div>
                </li>
            </ol>
        </nav>
    </header>




  )
}
