import { useTheme } from "@/contexts/ThemeContext";
const teamMembers = [{
  name: "Alexandra Chen",
  role: "Managing Partner",
  bio: "Former Google Ventures. 15+ years in tech investing."
}, {
  name: "Marcus Williams",
  role: "General Partner",
  bio: "Ex-Sequoia. Led investments in 8 unicorns."
}, {
  name: "Sarah Mitchell",
  role: "Partner",
  bio: "Former CTO. Deep expertise in AI/ML."
}];
const Team = () => {
  const {
    theme
  } = useTheme();
  const isDark = theme === 'dark';
  return;
};
export default Team;