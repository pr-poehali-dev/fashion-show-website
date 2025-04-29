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
import { Checkbox } from "@/components/ui/checkbox";
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
  age: z.string().min(1, { message: "Пожалуйста, укажите возраст" }).optional(),
  socialMedia: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  emergencyContact: z.string().optional(),
  hearAboutUs: z.enum(["social-media", "friends", "advertisement", "other"], {
    required_error: "Пожалуйста, укажите источник"
  }).optional(),
  newsletter: z.boolean().optional(),
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
      age: "",
      socialMedia: "",
      dietaryRestrictions: "",
      emergencyContact: "",
      newsletter: false,
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

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Возраст</FormLabel>
                <FormControl>
                  <Input placeholder="25" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="socialMedia"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Социальные сети</FormLabel>
                <FormControl>
                  <Input placeholder="@username" {...field} />
                </FormControl>
                <FormDescription>
                  Укажите свой Instagram, TikTok или другие аккаунты
                </FormDescription>
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

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="dietaryRestrictions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Диетические ограничения</FormLabel>
                <FormControl>
                  <Input placeholder="Например: вегетарианец, безглютеновая диета" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="emergencyContact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Контакт для экстренной связи</FormLabel>
                <FormControl>
                  <Input placeholder="Имя и номер телефона" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="hearAboutUs"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Как вы узнали о нас?</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите источник информации" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="social-media">Социальные сети</SelectItem>
                  <SelectItem value="friends">От друзей</SelectItem>
                  <SelectItem value="advertisement">Реклама</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newsletter"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Подписаться на новостную рассылку
                </FormLabel>
                <FormDescription>
                  Получайте обновления о предстоящих мероприятиях и новостях индустрии
                </FormDescription>
              </div>
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
