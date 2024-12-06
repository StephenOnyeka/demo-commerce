import Image from "next/image";
// import localFont from "next/font/local";
import Link from "next/link";
import { formatPrice, storefront } from "@/utils";
import { FaRegCircleCheck } from "react-icons/fa6"
import Navbar from "@/components/Navbar";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const staticProducts = [
  {
    id: 1,
    name: "Honey",
    href: "#",
    price: "$48",
    imageSrc: "/images/agric/ajci-honey.webp",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Garri",
    href: "#",
    price: "$35",
    imageSrc: "/images/agric/garri.webp",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Tigernut",
    href: "#",
    price: "$89",
    imageSrc: "/images/agric/tigernut.webp",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Catfish",
    href: "#",
    price: "$35",
    imageSrc: "/images/agric/catfish.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];
// const staticProducts = [
//   {
//     id: 1,
//     name: "Earthen Bottle",
//     href: "#",
//     price: "$48",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   },
//   {
//     id: 2,
//     name: "Nomad Tumbler",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
//     imageAlt:
//       "Olive drab green insulated bottle with flared screw lid and flat top.",
//   },
//   {
//     id: 3,
//     name: "Focus Paper Refill",
//     href: "#",
//     price: "$89",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
//     imageAlt:
//       "Person using a pen to cross a task off a productivity paper card.",
//   },
//   {
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   // More products...
// ];
const reviews = [
  {
    name: "Sarah Peters, New Orleans",
    description:
      "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Kelly McPherson, Chicago",
    description:
      "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!",
    icon: LockClosedIcon,
  },
  {
    name: "Chris Paul, Phoenix",
    description:
      "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.",
    icon: ArrowPathIcon,
  },
];
export default function Home({ products }) {
  console.log({ products });
  return (
    <div>
      <div className="relative isolate max-sm:px-4 px-6  lg:px-8">
        <span>
          <Navbar />
        </span>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#b780ff] to-[#89fce1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of farm produce.{" "}
              {/* <a href="#" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a> */}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-normal italic tracking-tight text-green-900 sm:text-7xl">
              <span className="font-bold not-italic">
                Connecting farms to tables:
              </span>{" "}
              A substainable future
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Discover the true essence of food: organic products cultivated
              with natural methods, for a healthy and environmentally friendly
              table
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#prod"
                className="flex items-center justify-center rounded-md bg-green-900 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm divide-x divide-green-600 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                <span className="pr-4">Get started</span>
                <span className="pl-4">
                  <FaRegCircleCheck size={18} />
                </span>
              </a>
              {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a280ff] to-[#89fcb5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div>
          <div
            id="prod"
            className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
          >
            <h2 className="text-2xl font-semibold">Products</h2>
            <br />
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {staticProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="group">
                    <Image
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="aspect-square w-full border rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                      width={500}
                      height={250}
                    />
                    <h3 className="mt-4 font-medium text-sm text-gray-700">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-green-900">
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base/7 font-semibold text-green-600">
                Our reviews
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                Get 25% off during our one-time sale
              </p>
              <p className="mt-6  text-lg/8 text-gray-600">
                Most of our products are limited releases that won{"'"}t come
                back. Get your favorite items while they{"'"}re in stock.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <a
                  href="#prod"
                  className="flex items-center justify-center rounded-md bg-green-900 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  <span className="">Get access to our one-time sale</span>
                </a>
              </div>
            </div>
            <br />
            <br />
            {/* The running background video */}
            {/* <div className=""> */}
            <div
                className="relative w-full h-0 rounded-lg"
                style={{ paddingTop: "56.25%" }}
              >
                <video
                  className="absolute top-0 left-0 w-full h-full rounded-lg lg:rounded-3xl"
                  // controls
                  autoPlay
                  loop
                  muted                  
                  src="/video/PinGrab_1733449187884.mp4"
                  type="video/mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            <br />
            <p className="mt-6 text-xl text-green-900 font-bold">
              What are people saying?
            </p>
            <br />
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                {reviews.map((feature) => (
                  <div key={feature.name} className="">
                    {/* <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-green-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div> */}
                    <dt className="mb-6">
                      <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        aria-hidden="true"
                        className="flex-shrink-0 text-gray-500"
                      >
                        <path
                          d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </dt>
                    <dt className="mb-3.5 text-lg/8 font-medium text-gray-600">
                      {feature.description}
                    </dt>
                    <dd className="text-base/7 font-semibold text-green-900 ">
                      {feature.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* The running background video */}

      {/* <div className="px-6">
      <div className="relative w-full h-0" style={{ paddingTop: "56.25%" }}>
        <video
          className="absolute top-0 left-0 w-full h-full"
          controls
          loop
          muted
          src="/video/PinGrab_1733449187884.mp4"
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
        </div>
      </div> */}
    </div>
  );
}