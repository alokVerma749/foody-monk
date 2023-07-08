const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">About Us</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            Welcome to Foody Monk, your ultimate destination for delicious and convenient food delivery.
            At Foody Monk, we believe that everyone deserves a delightful dining experience without the hassle of cooking or going out.
          </p>
          <section className="mb-8">
            <h2 className="text-2xl text-red-600 text-center font-medium mb-2 mt-6">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
                <img src="https://images.unsplash.com/photo-1528451635828-f28cd48439a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Delicious Cuisine" className="rounded-full w-48 h-48 object-cover mb-6" />
                <h3 className="text-xl text-gray-900 mb-2 text-center">Delicious Cuisine</h3>
                <p className="text-gray-700 text-center">
                  Explore our diverse menu offering a wide range of delicious cuisine from around the world. From comfort food to exotic flavors, we have something for everyone.
                </p>
              </div>
              <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
                <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="Customizable Options" className="rounded-full w-48 h-48 object-cover mb-6" />
                <h3 className="text-xl text-gray-900 mb-2 text-center">Customizable Options</h3>
                <p className="text-gray-700 text-center">
                  Personalize your order to suit your preferences. From dietary requirements to specific ingredient choices, we ensure a tailored dining experience.
                </p>
              </div>
              <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
                <img src="https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Convenient Delivery" className="rounded-full w-48 h-48 object-cover mb-6" />
                <h3 className="text-xl text-gray-900 mb-2 text-center">Convenient Delivery</h3>
                <p className="text-gray-700 text-center">
                  Enjoy the ease of food delivery right to your doorstep. Our efficient delivery system ensures that your food arrives fresh and on time, ready to be enjoyed.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-red-600 text-center font-medium mb-2 mt-6">Who We Are</h2>
            <p className="text-lg text-gray-700 mt-4 mb-4">
              Our dedicated team of chefs and delivery experts work tirelessly to bring you a wide range of culinary delights right to your doorstep.
              We carefully curate our menu to offer a diverse selection of cuisines, from traditional favorites to international specialties.
              Whether you're craving a comforting bowl of pasta, a sizzling plate of sushi, or a refreshing salad, we've got you covered.
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-md rounded-lg">
              <img src="https://images.unsplash.com/photo-1616734755909-bb016ce64930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Team" className="rounded-full w-40 h-40 object-cover m-2 md:mr-8" />
              <div>
                <h3 className="text-xl text-gray-900 mb-2 max-md:text-center">A Passionate Team</h3>
                <p className="text-gray-700">
                  At Foody Monk, we have assembled a team of passionate food enthusiasts who are dedicated to delivering exceptional culinary experiences.
                  Our team consists of talented chefs, expert food handlers, and customer-oriented professionals who work together to ensure your satisfaction.
                  We believe that good food has the power to bring people together and make every meal a memorable one.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-3">
              With Foody Monk, ordering your favorite meals is as easy as a few clicks.
              Simply browse our menu, select your desired dishes, customize them to your preferences, and place your order.
              Our efficient delivery system ensures that your food arrives fresh and piping hot, ready to satisfy your cravings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-red-600 text-center font-medium mb-2 mt-6">The Talented People Behind the Scenes of the Organization</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <a href="https://github.com/alokverma749" target="_blank" className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg">
                <img src="https://avatars.githubusercontent.com/u/87599400?v=4" alt="Team Member" className="w-36 h-36 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-medium text-gray-900 text-center">Alok Verma</h3>
                <p className="text-lg text-gray-900 text-center">Backend Developer</p>
              </a>
              <a href="https://github.com/jalandhar04" target="_blank" className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg">
                <img src="https://avatars.githubusercontent.com/u/98611278?v=4" alt="Team Member" className="w-36 h-36 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-medium text-gray-900 text-center">Jalandhar</h3>
                <p className="text-lg text-gray-900 text-center">Frontend Developer</p>
              </a>
              <a href="https://github.com/amankushwaha100" target="_blank" className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg">
                <img src="https://avatars.githubusercontent.com/u/109275885?v=4" alt="Team Member" className="w-36 h-36 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-medium text-gray-900 text-center">Aman Kushwaha</h3>
                <p className="text-lg text-gray-900 text-center">Documentation</p>
              </a>
              <a href="https://github.com/#" target="_blank" className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg">
                <img src="https://avatars.githubusercontent.com/u/114465453?v=4" alt="Team Member" className="w-36 h-36 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-medium text-gray-900 text-center">Ankit Vishwakarma</h3>
                <p className="text-lg text-gray-900 text-center">Project Manager</p>
              </a>
              <a href="https://github.com/sanigautam" target="_blank" className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg">
                <img src="https://avatars.githubusercontent.com/u/138346290?v=4" alt="Team Member" className="w-36 h-36 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-medium text-gray-900 text-center">Sunny Gautam</h3>
                <p className="text-lg text-gray-900 text-center">UI/UX Designer</p>
              </a>
              <a href="https://github.com/vinodkumarvkofficial" target="_blank" className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg">
                <img src="https://avatars.githubusercontent.com/u/114465454?v=4" alt="Team Member" className="w-36 h-36 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-medium text-gray-900 text-center">Vinod Kumar</h3>
                <p className="text-lg text-gray-900 text-center">Tester</p>
              </a>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              We value our customers' trust and prioritize their satisfaction above all.
              Our commitment to quality, timely service, and excellent customer support sets us apart from the rest.
              Join the Foody Monk family today and experience the convenience of premium food delivery like never before.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;