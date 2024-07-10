import React from "react";
import { Link} from "react-router-dom";
function Home(){
    return (
        <>
        {/* <div className="flex flex-wrap items-center  px-6 py-4">
            <div>
                <Link to='/' className='flex items-center'></Link>
                <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
                <p className="text-blue-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus magnam culpa provident architecto tenetur dicta totam. Dolores assumenda porro reiciendis. Aspernatur commodi temporibus at eius, sunt enim veritatis quas officia atque illo culpa voluptate velit cumque, ullam inventore, cum nisi maxime accusamus! Ipsum dignissimos cupiditate reprehenderit vitae ullam, saepe et similique asperiores corrupti, veniam ea quibusdam nihil non voluptatum. Sapiente ratione iusto amet sit quam voluptas ipsa distinctio repellat laboriosam, recusandae beatae, aliquid aspernatur animi. Consequuntur porro illo veniam enim molestias modi libero repudiandae dolor quae reprehenderit reiciendis suscipit blanditiis, accusamus culpa, quas dignissimos fugiat quibusdam incidunt delectus voluptate facere!</p>
            </div>
            <div>
            <Link to='/'className="flex items-center">
                  <img src="" className="mr-3 h-12" alt="img" />
                  </Link>
            </div>

        </div> */}

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-6">
                    <section className="bg-gray-100 p-6 rounded-lg mb-6 lg:mb-0 lg:flex-1">
                        <h2 className="text-2xl font-bold mb-4">Welcome</h2>
                        <p className="text-gray-700">
                            Welcome to our website! We are delighted to have you here.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa itaque, accusantium soluta ex perspiciatis assumenda delectus dolor consequatur distinctio eos possimus at non voluptatum minima natus iusto, ea cum praesentium. Quae et, excepturi veritatis quos obcaecati laboriosam illum? Nisi architecto ullam ea ipsam sequi, natus aut labore adipisci perferendis facere cumque voluptas, laborum soluta rerum provident! Ad cupiditate cum molestiae architecto illo alias rem eligendi debitis sint. In re
                        </p>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg mb-6 lg:mb-0 lg:flex-1">
                        <h2 className="text-2xl font-bold mb-4">Services</h2>
                        <p className="text-gray-700">
                            We offer a range of services to meet your needs.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus maxime itaque aut asperiores laborum nisi magnam voluptate voluptates! Voluptate assumenda accusamus aperiam quod, necessitatibus unde optio atque laudantium fugit culpa magni beatae deserunt! Magni mollitia accusantium consequuntur natus incidunt, esse quis repellendus fuga harum, numquam odio similique sequi veritatis at! Qui omnis natus quibusdam cupiditate dolore corrupti. Iure ullam deleniti adipisci incidunt ratione cum necessitatibus, maxime explicabo facere culpa, quas suscipit consectetur! Sed officiis, modi culpa expedita velit aperiam perspiciatis!
                        </p>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg lg:flex-1">
                        <h2 className="text-2xl font-bold mb-4">Contact</h2>
                        <p className="text-gray-700">
                            Get in touch with us for more information.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nesciunt architecto soluta tempora quae esse, praesentium, sunt animi quis accusamus delectus cupiditate deserunt maiores eveniet modi. Quaerat sapiente neque libero amet doloribus provident quisquam possimus obcaecati dolores quae, sit delectus quasi cupiditate doloremque, perferendis ex? Eum amet nihil, commodi numquam porro at molestias neque eaque expedita! Mollitia dolorum minima repudiandae ipsa possimus quasi quos dolor, soluta nihil facilis deleniti cumque!
                        </p>
                    </section>
                </div>
            </main>
        </>
    )
}
export default Home