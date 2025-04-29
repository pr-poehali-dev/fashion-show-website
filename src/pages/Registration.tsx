import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import RegistrationForm, { FormValues } from "@/components/registration/RegistrationForm";
import SuccessMessage from "@/components/registration/SuccessMessage";
import PageFooter from "@/components/layout/PageFooter";

const Registration = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSuccessfulSubmit = (data: FormValues) => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <SuccessMessage onReset={handleReset} />
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Регистрация на Fashion in Motion 2025</h1>
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
                  <RegistrationForm onSuccessfulSubmit={handleSuccessfulSubmit} />
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>

      <PageFooter />
    </div>
  );
};

export default Registration;
