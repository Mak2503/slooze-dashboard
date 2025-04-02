"use client";
import { useState, useContext } from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { paymentInfo as initialData } from "@/utils/mock-data";
import OverviewCard, { OverviewCardProps } from "./OverviewCard";
import { LocaleContext } from "../App";

const SortableItem = ({ info, t }: { info: OverviewCardProps; t: (key: string) => string }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: info.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "200ms ease-out",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="w-full">
      <OverviewCard
        {...info}
        title={t(`overview.title.${info.title}`)}
        subText={t(`overview.subText.${info.subText}.text`)}
        subItem={t(`overview.subText.${info.subText}.subItem`)}
      />
    </div>
  );
};

const Overview = () => {
  const { t } = useContext(LocaleContext);
  const [paymentInfo, setPaymentInfo] = useState(initialData);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = paymentInfo.findIndex((item) => item.id === active.id);
    const newIndex = paymentInfo.findIndex((item) => item.id === over.id);

    setPaymentInfo(arrayMove(paymentInfo, oldIndex, newIndex)); // Automatically swaps items
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={paymentInfo} strategy={horizontalListSortingStrategy}>
        <div className="flex justify-between w-full gap-4 items-center">
          {paymentInfo.map((info) => (
            <SortableItem key={info.id} info={info} t={t} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default Overview;
