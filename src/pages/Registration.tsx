import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
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

type FormValues = z.infer<typeof formSchema>;

const Registration = () => {
  const [submitted, setSubmitted] = useState(false);
  
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
    setSubmitted(true);
  }

  const participantType = form.watch("participantType");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Спасибо за регистрацию!</CardTitle>
                <CardDescription className="text-center">
                  Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center pt-6">
                <Button onClick={() => setSubmitted(false)}>Заполнить еще одну анкету</Button>
              </CardFooter>
            </Card>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Регистрация на Fashion Week 2025</h1>
                <p className="text-muted-foreground">
                  Заполните форму ниже, чтобы стать участником модного события года
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Анкета участника</CardTitle>
                  <CardDescription>
                    Все поля отмеченные * обязательны для заполнения
                  </CardDescription>
                </CardHeader>
                <CardContent>
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

                      {participantType === "model" && (
                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Опыт работы моделью</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Расскажите о вашем опыте работы моделью..."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      {participantType === "designer" && (
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Название бренда/компании</FormLabel>
                              <FormControl>
                                <Input placeholder="Укажите название вашего бренда" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

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
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>

      <footer className="mt-auto bg-muted py-6">
        <div className="container text-center">
          <p className="text-muted-foreground">
            &copy; 2025 Fashion Week. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Registration;
