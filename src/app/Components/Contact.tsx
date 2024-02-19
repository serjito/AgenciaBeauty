'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster, toast } from 'sonner';
import { z } from 'zod';
import { sendEmail } from '@/libs/sendEmail';
import { BiCheck } from 'react-icons/bi';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Debe contener al menos 1 caracteres' })
    .max(100, { message: 'No debe contener más de 100 caracteres' }),
  telephone: z.number().int(),
  email: z.string().email({
    message: 'Debe contener un email válido',
  }),
  terms: z.boolean().refine(value => value === true, {
    message: 'Debe aceptar los términos y condiciones',
  }),
});

interface ContactProps {
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ onClose }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (values: z.infer<typeof userSchema>) => {
    try {
      await sendEmail({ ...values });
      toast('Correo enviado correctamente', {
        description: 'Gracias por ponerse en contacto con nosotros',
        icon: <BiCheck style={{ color: 'green', fontSize: '1rem' }} />,
      });
      const response = await axios.post('/api/register', values);
      if (response.status === 200) {
        router.push('/video');
      } else {
        throw new Error('Error al guardar los datos');
      }
      reset();
    } catch (error) {
      toast.error((error as Error).message);
    }
  };
  return (
    <div className="w-full h-full">
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] w-[95%] h-auto top-0  rounded-2xl flex flex-col justify-center items-center py-3 px-3 z-[90]"
            >
              <div className="w-full flex flex-col">
                <div className="w-full flex justify-end items-center my-1">
                  <button>
                    <MdClose
                      onClick={onClose}
                      size={30}
                      style={{
                        color: '#d4a056',
                        backgroundColor: 'rgba(255, 255, 255,0.9)',
                        borderRadius: '50%',
                        marginRight: '.2rem',
                        cursor: 'pointer',
                      }}
                    />
                  </button>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <h2 className=" text-center text-lg md:text-2xl px-1 font-semibold text-white text-pretty">
                    ¡Deslumbra en el Mundo Digital! Descubre los Secretos para
                    Impulsar tu Peluquería
                  </h2>
                </div>
              </div>

              <div className="z-50 w-full md:w-[70%] lg:w-[40%] h-auto flex flex-col items-center justify-center mb-4 bg-black/30 rounded-3xl px-1 py-4 mx-auto my-1">
                <form onSubmit={handleSubmit(onSubmit)} className="px-1">
                  <label htmlFor="name">Nombre*</label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    {...register('name')}
                  />{' '}
                  {errors.name && (
                    <span className="text-red-500 text-xs">
                      {errors.name.message}
                    </span>
                  )}
                  <label htmlFor="telephone">Teléfono*</label>
                  <input
                    type="tel"
                    id="telephone"
                    inputMode="numeric"
                    autoComplete="off"
                    {...register('telephone', {
                      valueAsNumber: true,
                      setValueAs: (value: string) => Number(value), // Convertir el valor a número
                    })}
                  />{' '}
                  {errors.telephone && (
                    <span className="text-red-500 text-xs">
                      {errors.telephone?.message}
                    </span>
                  )}
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    {...register('email')}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">
                      {errors.email?.message}
                    </span>
                  )}
                  <div className="flex flex-col justify-center items-center py-3">
                    <label htmlFor="terms">
                      Acepto términos y condiciones*
                    </label>
                    <input
                      type="checkbox"
                      id="terms"
                      className="ml-2 h-4"
                      {...register('terms')}
                    />{' '}
                    {errors.terms && (
                      <span className="text-red-500 text-xs">
                        {errors.terms?.message}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-center items-center py-1">
                    <button
                      type="submit"
                      className=" text-white text-xl font-bold px-8 py-4 bg-gradient-to-t from-[#9958cc] to-[#6c71e5] shadow-inner  shadow-white/10 rounded-3xl"
                    >
                      Entrar
                    </button>
                    <Toaster />
                  </div>
                  <div className="text-white">
                    <span>* Campos requeridos</span>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
};

export default Contact;
