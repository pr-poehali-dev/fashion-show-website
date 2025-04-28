import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "../RegistrationForm";

interface ModelFieldsProps {
  control: Control<FormValues>;
}

const ModelFields = ({ control }: ModelFieldsProps) => {
  return (
    <FormField
      control={control}
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
  );
};

export default ModelFields;
