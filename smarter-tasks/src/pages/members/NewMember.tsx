import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { addMember } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const NewMember = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatchMembers = useMembersDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, password } = data;

    try {
      const response = await addMember(dispatchMembers, {
        name,
        email,
        password,
      });

      if (response.ok) {
        closeModal();
      } else {
        setError(response.error as string);
      }
    } catch (error) {
      console.error("Error adding member:", error);
      setError("Failed to add member.");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        id="new-member-btn"
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        {t("newMemberButton")}
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {t("addNewMemberTitle")}
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {error && <span>{error}</span>}
                      <input
                        id="name"
                        type="text"
                        placeholder={t("memberNamePlaceholder")}
                        autoFocus
                        {...register("name", { required: true })}
                        className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && <span>{t("nameRequired")}</span>}
                      <input
                        id="email"
                        type="email"
                        placeholder={t("emailPlaceholder")}
                        autoFocus
                        {...register("email", { required: true })}
                        className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && <span>{t("emailRequired")}</span>}
                      <input
                        id="password"
                        type="password"
                        placeholder={t("passwordPlaceholder")}
                        autoFocus
                        {...register("password", { required: true })}
                        className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                          errors.password ? "border-red-500" : ""
                        }`}
                      />
                      {errors.password && <span>{t("passwordRequired")}</span>}
                      <button
                        type="submit"
                        id="create-member-btn"
                        className="inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        {t("submitButton")}
                      </button>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        {t("cancelButton")}
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NewMember;
