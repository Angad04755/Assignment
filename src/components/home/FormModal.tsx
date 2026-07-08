import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "../../ui/Modal";
import { UserSchema, type UserFormData } from "../../schemas/UserSchema";
import { AddUser } from "../../redux/slices/UserSlice";
import type { AppDispatch } from "../../redux/store";
import type { userType } from "../../types/userType";
import { X } from "lucide-react";
import { toast } from "sonner";
import  { useState } from "react";
interface FormModalProps {
    onclose: () => void,
}
function FormModal({ onclose }: FormModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = (data: UserFormData) => {
    const newUser: userType = {
      id: Date.now(),
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      website: data.website,

      company: {
        name: data.companyName,
        catchPhrase: "",
        bs: "",
      },

      address: {
        street: data.street,
        suite: data.suite,
        city: data.city,
        zipcode: data.zipcode,
        geo: {
          lat: data.lat,
          lng: data.lng,
        },
      },
    };

    dispatch(AddUser(newUser));
    reset();
    toast.success("Added new user")
    onclose();
  };
  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  }
  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  }

  return (
    <Modal>
        <div>
        <X size={28} color="gray" className="float-right cursor-pointer" onClick={onclose}/>
      <h2 className="text-2xl font-bold mb-6 text-cyan-900">
        Create New User
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {currentIndex === 0 && (
          <>
        <input
          {...register("name")}
          placeholder="Name"
          className="w-full rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 border-1 border-cyan-500 focus-within:outline-none"
        />
        <p className="text-sm text-red-500">{errors.name?.message}</p>

        <input
          {...register("username")}
          placeholder="Username"
          className="w-full rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 border-1 border-cyan-500 focus-within:outline-none"
        />
        <p className="text-sm text-red-500">{errors.username?.message}</p>

        <input
          {...register("email")}
          placeholder="Email"
          className="w-full rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 border-1 border-cyan-500 focus-within:outline-none"
        />
        <p className="text-sm text-red-500">{errors.email?.message}</p>

        <input
          {...register("phone")}
          placeholder="Phone"
          className="w-full rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 border-1 border-cyan-500 focus-within:outline-none"
        />
        <p className="text-sm text-red-500">{errors.phone?.message}</p>
        </>
          )}
          {currentIndex === 1 && (
            <>
        <input
          {...register("website")}
          placeholder="Website"
          className="w-full rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 border-1 border-cyan-500 focus-within:outline-none"
        />
        <p className="text-sm text-red-500">{errors.website?.message}</p>

        <input
          {...register("companyName")}
          placeholder="Company Name"
          className="w-full rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 border-1 border-cyan-500 focus-within:outline-none"
        />
        <p className="text-sm text-red-500">{errors.companyName?.message}</p>

        <input
          {...register("street")}
          placeholder="Street"
          className="w-full rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 border-1 border-cyan-500 focus-within:outline-none"
        />
        <p className="text-sm text-red-500">{errors.street?.message}</p>

        <input
          {...register("suite")}
          placeholder="Suite"
          className="w-full rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 border-1 border-cyan-500 focus-within:outline-none"
        />
        <p className="text-sm text-red-500">{errors.suite?.message}</p>

        <input
          {...register("city")}
          placeholder="City"
          className="w-full rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 border-1 border-cyan-500 focus-within:outline-none"
        />
        <p className="text-sm text-red-500">{errors.city?.message}</p>

        <input
          {...register("zipcode")}
          placeholder="Zipcode"
          className="w-full rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 border-1 border-cyan-500 focus-within:outline-none"
        />
        <p className="text-sm text-red-500">{errors.zipcode?.message}</p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              {...register("lat")}
              placeholder="Latitude"
              className="w-full rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 border-1 border-cyan-500 focus-within:outline-none"
            />
            <p className="text-sm text-red-500">
              {errors.lat?.message}
            </p>
          </div>

          <div>
            <input
              {...register("lng")}
              placeholder="Longitude"
              className="w-full rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 border-1 border-cyan-500 focus-within:outline-none"
            />
            <p className="text-sm text-red-500">
              {errors.lng?.message}
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white hover:bg-green-600 active:bg-green-700 transition cursor-pointer"
        >
          Add User
        </button>
        </>
        )}
      </form>
      <div className="flex flex-row justify-between place-content-center mt-[5px]">
        {currentIndex === 1 && (<button className="bg-green-500 text-white px-3 py-2 rounded-lg" onClick={handlePrev}>Prev</button>)}
        {currentIndex === 0 && (<button className="bg-green-500 text-white px-3 py-2 rounded-lg" onClick={handleNext}>Next</button>)}
      </div>
      </div>
    </Modal>
  );
}

export default FormModal;