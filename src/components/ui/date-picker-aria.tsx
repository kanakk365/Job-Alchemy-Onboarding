"use client";

import { Calendar } from "@/components/ui/calendar-rac";
import { CalendarDate } from "@internationalized/date";
import { DateInput } from "@/components/ui/datefield-rac";
import { CalendarIcon } from "lucide-react";
import { 
  Button, 
  DatePicker, 
  DatePickerProps, 
  Dialog, 
  Group, 
  Label, 
  Popover 
} from "react-aria-components";
interface CustomDatePickerProps extends DatePickerProps<CalendarDate> {
  label: string;
}


export function CustomDatePicker({ label, ...props }: CustomDatePickerProps) {
  return (
    <DatePicker {...props} className="space-y-2">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      <div className="flex">
        <Group className="w-full">
          <DateInput className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent pe-9" />
        </Group>
        <Button className="z-10 -me-px -ms-9 flex w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 hover:text-foreground focus:outline-none">
          <CalendarIcon size={16} strokeWidth={2} />
        </Button>
      </div>
      <Popover
        className="z-50 rounded-lg border bg-white shadow-lg"
        offset={4}
      >
        <Dialog className="p-2">
          <Calendar />
        </Dialog>
      </Popover>
    </DatePicker>
  );
}