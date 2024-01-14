export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container w-[25rem] p-4 bg-zinc-900 text-white font-jamjuree">
      {children}
    </div>
  );
};
