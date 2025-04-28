import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import ModelFields from "./participant-fields/ModelFields";
import DesignerFields from "./participant-fields/DesignerFields";

export const formSchema = z.object({
  fullName: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  email: z.string().email({ message: "Введите корректный email" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  participantType: z.enum(["guest", "model", "designer"], { 
    required_error: "Выберите тип участия" 
  }),
  experience: z.string().optional(),
  companyName: z.string().optional(),
  interests: z.enum(["high-fashion", "street-fashion", "eco-fashion"], { 
    required_error: "Выберите ваш интерес" 
  }),
  message: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

interface RegistrationFormProps {
  onSuccessfulSubmit: (data: FormValues) => void;
}

const RegistrationForm = ({ onSuccessfulSubmit }: RegistrationFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    toast({
      title: "Регистрация успешна!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    console.log(data);
    onSuccessfulSubmit(data);
  }

  const participantType = form.watch("participantType");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Полное имя *</FormLabel>
              <FormControl>
                <Input placeholder="Иван Иванов" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон *</FormLabel>
                <FormControl>
                  <Input placeholder="+7 (999) 999-99-99" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="participantType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тип участия *</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-3 gap-4"
                >
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="guest" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      Гость
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="model" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      Модель
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="designer" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      Дизайнер
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {participantType === "model" && <ModelFields control={form.control} />}
        {participantType === "designer" && <DesignerFields control={form.control} />}

        <FormField
          control={form.control}
          name="interests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Интересы *</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите ваш основной интерес" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="high-fashion">Высокая мода</SelectItem>
                  <SelectItem value="street-fashion">Уличная мода</SelectItem>
                  <SelectItem value="eco-fashion">Эко-мода</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Выберите категорию, которая вас интересует больше всего
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дополнительная информация</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Укажите любую дополнительную информацию, которую считаете важной..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Отправить заявку
        </Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;
