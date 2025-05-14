import { useState } from 'react';
import { Card, CardBody, Tabs, Tab } from '@nextui-org/react';

export const Auth = () => {
  const [selected, setSelected] = useState('login');

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        <Card className="max-w-full w-[340px] h-[450px]">
          <CardBody className="overwlow-hidden">
            <Tabs fullWidth
              size="md"
              selectedKey={ selected }
              onSelectionChange={(key) => setSelected(key as string)}
            >
              <Tab key="login" title="Enter">
                Enter
              </Tab>

              <Tab key="sign-up" title="sigh-up">
                Sigh Up
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}