const PageFooter = () => {
  return (
    <footer className="mt-auto bg-muted py-6">
      <div className="container text-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Fashion Week. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default PageFooter;
