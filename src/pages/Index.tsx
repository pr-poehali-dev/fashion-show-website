import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            FASHION WEEK <span className="text-primary">2025</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Эксклюзивное модное событие года, где талантливые дизайнеры представят свои новые коллекции
          </p>
          <Button size="lg" asChild className="w-fit">
            <Link to="/registration">Зарегистрироваться</Link>
          </Button>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">О мероприятии</h2>
            <p className="text-lg mb-4">
              Fashion Week 2025 — это масштабное событие, объединяющее именитых и начинающих дизайнеров, модельеров, стилистов и всех ценителей высокой моды.
            </p>
            <p className="text-lg mb-4">
              В течение недели гости смогут увидеть показы новых коллекций, посетить мастер-классы, встретиться с экспертами индустрии и погрузиться в уникальную атмосферу моды.
            </p>
            <div className="flex gap-4 mt-8">
              <Button variant="outline">Программа</Button>
              <Button variant="secondary">Спикеры</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Fashion show" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80" 
                alt="Fashion show" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Fashion show" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-accent">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Расписание</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="text-primary text-xl font-semibold mb-2">День 1</div>
              <h3 className="text-2xl font-bold mb-4">Открытие</h3>
              <p className="mb-4 text-muted-foreground">
                Торжественное открытие недели моды, показы ведущих дизайнеров и праздничный коктейль.
              </p>
              <time className="text-sm font-medium">25 Мая, 2025</time>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="text-primary text-xl font-semibold mb-2">День 2-4</div>
              <h3 className="text-2xl font-bold mb-4">Основная программа</h3>
              <p className="mb-4 text-muted-foreground">
                Показы коллекций, мастер-классы, лекции от экспертов индустрии моды.
              </p>
              <time className="text-sm font-medium">26-28 Мая, 2025</time>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="text-primary text-xl font-semibold mb-2">День 5</div>
              <h3 className="text-2xl font-bold mb-4">Закрытие</h3>
              <p className="mb-4 text-muted-foreground">
                Финальный показ, награждение участников и праздничный гала-ужин.
              </p>
              <time className="text-sm font-medium">29 Мая, 2025</time>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 container text-center">
        <h2 className="text-3xl font-bold mb-6">Станьте частью модного события года</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Не упустите возможность стать участником или гостем Fashion Week 2025 — заполните анкету регистрации прямо сейчас!
        </p>
        <Button size="lg" asChild>
          <Link to="/registration">Перейти к регистрации</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container text-center">
          <p className="text-muted-foreground">
            &copy; 2025 Fashion Week. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
