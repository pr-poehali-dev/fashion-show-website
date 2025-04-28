import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Спасибо за регистрацию!</CardTitle>
        <CardDescription className="text-center">
          Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center pt-6">
        <Button onClick={onReset}>Заполнить еще одну анкету</Button>
      </CardFooter>
    </Card>
  );
};

export default SuccessMessage;
