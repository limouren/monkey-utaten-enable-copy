(() => {
  const lyricBody = document.querySelectorAll(".lyricBody");
  for (let i = 0; i < lyricBody.length; ++i) {
    const elem = lyricBody[i] as HTMLElement;

    elem.style.userSelect = "auto";
    (elem.style as any).oUserSelect = "auto";
    (elem.style as any).msUserSelect = "auto";
    (elem.style as any).mozUserSelect = "auto";
    (elem.style as any).webkitUserSelect = "auto";

    elem.onselectstart = null;
    elem.oncontextmenu = null;
  }
})();
