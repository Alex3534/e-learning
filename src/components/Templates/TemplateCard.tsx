import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Template } from '@/types/template';

interface TemplateCardProps {
    template: Template;
}

const TemplateCard = ({ template }: TemplateCardProps) => {
    const truncateText = (text: string, wordLimit: number): string => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + " ......";
        }
        return text;
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col justify-between p-8"
        >
            <div>
                <div className="rounded-3xl relative h-64 w-full mb-6">
                    <Image
                        src={template.image}
                        alt={template.title}
                        fill
                        className="object-cover rounded-3xl"
                    />
                </div>

                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {template.title}
                    </h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {template.price}
                    </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {truncateText(template.description, 10)}
                </p>

                <div className="space-y-2 mb-6">
                    {template.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                        </div>
                    ))}
                </div>
            </div>

            <div className="">
                <div className="flex space-x-3">
                    <Link
                        href={template.demoUrl}
                        className="flex-1 bg-primary text-white text-center py-2 rounded-full hover:bg-white hover:text-primary border border-transaparent hover:border-primary transition-colors"
                    >
                        Voir la démo
                    </Link>
                    <Link
                        href={`/templates/${template.id}`}
                        className="flex-1 border border-primary text-primary text-center py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                        Détails
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default TemplateCard;