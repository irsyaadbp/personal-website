import {
  FileHeart,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailsIcon,
  TwitterIcon,
} from "lucide-react";
import { Button } from "./button";

export default function Socmed() {
  return (
    <div className="flex mt-3">
      <Button variant="ghost" size="lg" className="text-zinc-400" asChild>
        <a
          href="https://github.com/irsyaadbp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </Button>
      <Button variant="ghost" size="lg" className="text-zinc-400" asChild>
        <a
          href="mailto:irsyaadbp@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailsIcon />
        </a>
      </Button>
      <Button variant="ghost" size="lg" className="text-zinc-400" asChild>
        <a
          href="https://x.com/irsyaadbp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
      </Button>
      <Button variant="ghost" size="lg" className="text-zinc-400" asChild>
        <a
          href="https://www.instagram.com/irsyaadbp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </Button>
      <Button variant="ghost" size="lg" className="text-zinc-400">
        <a
          href="https://www.linkedin.com/in/irsyaad-budi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
      </Button>
      <Button variant="ghost" size="lg" className="text-zinc-400" asChild>
        <a
          href="https://bit.ly/new-portfolio-irsyaad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileHeart />
        </a>
      </Button>
    </div>
  );
}
