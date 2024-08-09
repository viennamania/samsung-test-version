interface TitlePropsType {
  title: string;
  subtitle: string;
}

const Title = ({title, subtitle}: TitlePropsType) => {
  return (
    <header className="border-b border-t border-[#323233] px-6 py-8 lg:border-t-0 lg:px-6">
      <div className="mx-auto max-w-[1200px] justify-between">
        <p className="text-linear text-[32px]">{title}</p>
        <p className="text-[#8E9199]">{subtitle}</p>
      </div>
    </header>
  );
};

export default Title;
