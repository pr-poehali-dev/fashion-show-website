import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormValues } from "../RegistrationForm";

interface DesignerFieldsProps {
  control: Control<FormValues>;
}

const DesignerFields = ({ control }: DesignerFieldsProps) => {
  return (
    <FormField
      control={control}
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
  );
};

export default DesignerFields;
