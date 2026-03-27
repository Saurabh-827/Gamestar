import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@/components/ui/switch";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch checked={colorMode === "dark"} onCheckedChange={toggleColorMode}>
      Dark mode
    </Switch>
  );
};

export default ColorModeSwitch;
