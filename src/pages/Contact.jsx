import React from "react";
import {
  Typography,
  Card,
  Input,
  Textarea,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
} from "@material-tailwind/react";

const Contact = () => {
  return (
    <>
      <div className="Form">
        <Card className="mt-12 mb-12 py-10 px-10 bg-blue-900" shadow={false}>
          <Typography variant="h1" color="white" className="text-center">
            Leave a Message
          </Typography>
          <form action="" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input color="white" label="Email" type="email" size="lg" />
              <Input color="white" label="Phone" type="tel" size="lg" />
            </div>
            <div className="w-96">
              <Textarea label="Message" color="" className="text-white h-32" />
            </div>
          </form>
          <Button color="white">Send message</Button>
        </Card>
      </div>
    </>
  );
};

export default Contact;
