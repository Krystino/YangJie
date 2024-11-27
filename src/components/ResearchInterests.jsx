export default function ResearchInterests() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">研究兴趣</h2>
      <div className="prose max-w-none">
        <p className="mb-4">
          脑疾病的风险贯穿人的整个生命周期，比如儿童自闭症、癫痫、强迫症、抑郁症以及老年时期的帕金森、阿兹海默症等。我们研制的闭环神经调控片上系统芯片通过对脑内信号的实时读取、人工智能处理和调控，可以达到脑疾病精准治疗的目的。
        </p>
        <p className="mb-4">
          大脑是人类重要的创新以及学习能力的载体，其智能程度和能效水平远远超过任何现有的人工智能模型。神经形态计算采用新的算法和硬件，来模拟人脑与世界交互的方式，期望实现更加接近人类的智能与更高能效的计算。
        </p>
      </div>
      <div className="mt-8">
        <img 
          src="research_overview.jpg" 
          alt="Research Diagram"
          className="w-full max-w-3xl mx-auto"
        />
      </div>
    </section>
  );
}