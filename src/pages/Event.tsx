import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Lesson } from "../components/Lesson";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}
