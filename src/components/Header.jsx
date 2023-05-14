import { Link } from "@reach/router";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="py-7 absolute w-full">
      <Container>
        <nav className="relative z-10 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link to="/" aria-label="Home">
              <Logo className="h-32 w-auto" />
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
