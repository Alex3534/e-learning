// componentData.ts
import { ButtonFullRadiusCode, ButtonFullRadiusOutlineCode, DefaultButtonCode, DefaultButtonOutlineCode, GradientButtonCode } from '@/components/ui/Button/buttonCode';
import { ButtonFullRadiusBlack, ButtonFullRadiusBlue, ButtonFullRadiusGray, ButtonFullRadiusGreen, ButtonFullRadiusOrange, ButtonFullRadiusPurple, ButtonFullRadiusRed, ButtonFullRadiusYellow } from '@/components/ui/Button/buttonFullRadius';
import { ButtonFullradiusOutlineBlack, ButtonFullradiusOutlineBlue, ButtonFullradiusOutlineGray, ButtonFullradiusOutlineGreen, ButtonFullradiusOutlineOrange, ButtonFullradiusOutlinePurple, ButtonFullradiusOutlineRed, ButtonFullradiusOutlineYellow } from '@/components/ui/Button/buttonFullreadiusOutline';
import { ButtonOutlineGradientCyanToBlue, ButtonOutlineGradientGreenToBlue, ButtonOutlineGradientPinkToOrange, ButtonOutlineGradientPurpleToBlue, ButtonOutlineGradientPurpleToPink, ButtonOutlineGradientRedToYellow, ButtonOutlineGradientTealToLime } from '@/components/ui/Button/ButtonOutlineGradient';
import { DefaultButtonBlack, DefaultButtonBlue, DefaultButtonGray, DefaultButtonGreen, DefaultButtonOrange, DefaultButtonPurple, DefaultButtonRed, DefaultButtonYellow } from '@/components/ui/Button/defaultButton';
import { DefaultButtonOutlineBlack, DefaultButtonOutlineBlue, DefaultButtonOutlineGray, DefaultButtonOutlineGreen, DefaultButtonOutlineOrange, DefaultButtonOutlinePurple, DefaultButtonOutlineRed, DefaultButtonOutlineYellow } from '@/components/ui/Button/defaultButtonOutline';
import { DuotoneButtonCyanToBlue, DuotoneButtonGreenToBlue, DuotoneButtonPinkToOrange, DuotoneButtonPurpleToBlue, DuotoneButtonPurpleToPink, DuotoneButtonRedToYellow, DuotoneButtonTealToLime } from '@/components/ui/Button/duotoneButton';
import { GradientButtonBlack, GradientButtonBlue, GradientButtonGray, GradientButtonGreen, GradientButtonOrange, GradientButtonPurple, GradientButtonRed, GradientButtonYellow } from '@/components/ui/Button/gradientButton';
import { ConnectWithMetaMask, DownloadButton, EditButton, SignInWithApple, SignInWithFacebook, SignInWithGitHub, SignInWithGoogle, SignInWithTwiter } from '@/components/ui/Button/buttonWithIcon';
import React from 'react';
import { ButtonDuotoneCode, ButtonDuotoneOutlineCode } from '@/components/ui/Button/buttonGradientCode';
import { ComponentItem } from '@/types/component';


export const ButtonComponents: ComponentItem[] = [
  {
    id: 1,
    title: 'Boutons Pilule - Variantes Couleurs',
    description: 'Une collection de boutons arrondis entièrement personnalisés avec différentes couleurs. Chaque variante garde une esthétique cohérente, avec un fond coloré, un texte blanc, et une animation de survol inversant les couleurs. Ces boutons sont conçus pour représenter différentes actions ou statuts dans l’interface utilisateur.',
    category: 'UI',
    tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
    component: (
      <div className="flex gap-4 flex-wrap">
        <ButtonFullRadiusBlue label={'Blue'} />
        <ButtonFullRadiusRed label={'Red'} />
        <ButtonFullRadiusYellow label={'Yellow'} />
        <ButtonFullRadiusBlack label={"Black"} />
        <ButtonFullRadiusGreen label={"Green"} />
        <ButtonFullRadiusPurple label={"Purple"} />
        <ButtonFullRadiusGray label={"Gray"} />
        <ButtonFullRadiusOrange label={"Orange"} />
      </div>
    ),
    code: ButtonFullRadiusCode,
    usage: 'Utilisez ces boutons pour représenter des actions principales ou secondaires dans votre application. Choisissez la couleur selon le contexte : bleu pour les actions générales, rouge pour les suppressions, vert pour les validations, etc.',
  },

  {
    id: 2,
    title: 'Boutons Pilule Contour - Variantes Couleurs',
    description: 'Une collection de boutons à bordure arrondie avec effet de contour. Chaque variante affiche une couleur dominante sur la bordure et le texte, et s’inverse au survol pour offrir un retour visuel fluide. Idéal pour les actions secondaires ou modérées dans votre interface utilisateur.',
    category: 'UI',
    tags: ['interaction', 'clickable', 'outline', 'button', 'rounded', 'colors', 'secondary'],
    component: (
      <div className="flex gap-4 flex-wrap">
        <ButtonFullradiusOutlineBlue label={'Blue'} />
        <ButtonFullradiusOutlineRed label={'Red'} />
        <ButtonFullradiusOutlineYellow label={'Yellow'} />
        <ButtonFullradiusOutlineBlack label={"Black"} />
        <ButtonFullradiusOutlineGreen label={"Green"} />
        <ButtonFullradiusOutlinePurple label={"Purple"} />
        <ButtonFullradiusOutlineGray label={"Gray"} />
        <ButtonFullradiusOutlineOrange label={"Orange"} />
      </div>
    ),
    code: ButtonFullRadiusOutlineCode,
    usage: 'Utilisez ces boutons pour des actions secondaires ou moins prioritaires. La version contour est idéale pour ne pas surcharger visuellement l’interface tout en gardant une forte accessibilité.',
  },

  {
    id: 3,
    title: 'Boutons Classiques - Variantes Couleurs',
    description: 'Une collection de boutons classiques avec angles légèrement arrondis, disponibles en plusieurs couleurs. Idéals pour les actions principales dans l’interface utilisateur. Chaque bouton possède un fond coloré, un texte blanc et un effet d’inversion au survol.',
    category: 'UI',
    tags: ['interaction', 'clickable', 'default', 'button', 'solid', 'colors', 'primary'],
    component: (
      <div className="flex gap-4 flex-wrap">
        <DefaultButtonBlue label={'Blue'} />
        <DefaultButtonRed label={'Red'} />
        <DefaultButtonYellow label={'Yellow'} />
        <DefaultButtonBlack label={'Black'} />
        <DefaultButtonGreen label={'Green'} />
        <DefaultButtonPurple label={'Purple'} />
        <DefaultButtonGray label={'Gray'} />
        <DefaultButtonOrange label={'Orange'} />
      </div>
    ),
    code: DefaultButtonCode,
    usage: 'Utilisez ces boutons pour vos actions principales standards dans l’interface. Recommandé lorsque vous souhaitez une esthétique plus discrète que les boutons “pilule”.',
  },

  {
    id: 4,
    title: 'Boutons Classiques Contour - Variantes Couleurs',
    description: 'Une collection de boutons classiques avec bords légèrement arrondis et un style contour (outline). Chaque bouton affiche une bordure colorée, un texte assorti et un effet de survol inversé. Idéal pour les actions secondaires ou modérées dans une interface.',
    category: 'UI',
    tags: ['interaction', 'clickable', 'button', 'outline', 'secondary', 'default', 'colors'],
    component: (
      <div className="flex gap-4 flex-wrap">
        <DefaultButtonOutlineBlue label={'Blue'} />
        <DefaultButtonOutlineRed label={'Red'} />
        <DefaultButtonOutlineYellow label={'Yellow'} />
        <DefaultButtonOutlineBlack label={'Black'} />
        <DefaultButtonOutlineGreen label={'Green'} />
        <DefaultButtonOutlinePurple label={'Purple'} />
        <DefaultButtonOutlineGray label={'Gray'} />
        <DefaultButtonOutlineOrange label={'Orange'} />
      </div>
    ),
    code: DefaultButtonOutlineCode,
    usage: 'Utilisez ces boutons pour représenter des actions secondaires. Ils s’intègrent parfaitement dans des interfaces où la hiérarchie visuelle doit être claire.',
  },


  {
    id: 5,
    title: 'Boutons Dégradés - Variantes Couleurs',
    description: 'Une collection de boutons modernes avec un effet de dégradé linéaire. Idéals pour les actions principales lorsque l’accent visuel est important. Chaque bouton possède un fond en dégradé, un texte blanc et un effet de survol élégant.',
    category: 'UI',
    tags: ['interaction', 'clickable', 'gradient', 'colorful', 'button', 'primary', 'modern'],
    component: (
      <div className="flex gap-4 flex-wrap">
        <GradientButtonBlue label="Blue" />
        <GradientButtonRed label="Red" />
        <GradientButtonYellow label="Yellow" />
        <GradientButtonBlack label="Black" />
        <GradientButtonGreen label="Green" />
        <GradientButtonPurple label="Purple" />
        <GradientButtonGray label="Gray" />
        <GradientButtonOrange label="Orange" />
      </div>
    ),
    code: GradientButtonCode,
    usage: 'Utilisez ces boutons pour des actions importantes ou pour attirer l’attention sur des appels à l’action dans une interface moderne.',
  },


  {
    id: 6,
    title: 'Boutons Duotone - Variantes de Dégradé',
    description: 'Une collection de boutons avec un effet duotone qui combine deux couleurs distinctes pour créer un dégradé attrayant. Chaque bouton a un style dynamique et saisissant, parfait pour attirer l’attention sur des actions primaires dans votre interface.',
    category: 'UI',
    tags: ['interaction', 'clickable', 'duotone', 'gradient', 'colorful', 'button', 'primary', 'modern'],
    component: (
      <div className="flex gap-4 flex-wrap">
        <DuotoneButtonPurpleToBlue label="Purple to Blue" />
        <DuotoneButtonCyanToBlue label="Cyan to Blue" />
        <DuotoneButtonGreenToBlue label="Green to Blue" />
        <DuotoneButtonPurpleToPink label="Purple to Pink" />
        <DuotoneButtonPinkToOrange label="Pink to Orange" />
        <DuotoneButtonTealToLime label="Teal to Lime" />
        <DuotoneButtonRedToYellow label="Red to Yellow" />
      </div>
    ),
    code: ButtonDuotoneCode,
    usage: 'Utilisez ces boutons pour des actions importantes nécessitant un impact visuel fort, souvent utilisés dans des interfaces modernes et dynamiques.',
  },

  {
    id: 7,
    title: 'Boutons Contour avec Dégradé - Variantes de Couleurs',
    description: 'Une série de boutons avec un contour et un fond en dégradé linéaire. Chaque bouton offre un design unique, associant un contour avec un dégradé de couleurs pour une interface moderne et dynamique. Idéal pour les actions principales qui nécessitent une attention visuelle.',
    category: 'UI',
    tags: ['interaction', 'clickable', 'button', 'outline', 'gradient', 'colorful', 'primary', 'modern'],
    component: (
      <div className="flex gap-4 flex-wrap">
        <ButtonOutlineGradientPurpleToBlue label="Purple to Blue" />
        <ButtonOutlineGradientCyanToBlue label="Cyan to Blue" />
        <ButtonOutlineGradientGreenToBlue label="Green to Blue" />
        <ButtonOutlineGradientPurpleToPink label="Purple to Pink" />
        <ButtonOutlineGradientPinkToOrange label="Pink to Orange" />
        <ButtonOutlineGradientTealToLime label="Teal to Lime" />
        <ButtonOutlineGradientRedToYellow label="Red to Yellow" />
      </div>
    ),
    code: ButtonDuotoneOutlineCode,  // Tu peux ajouter le code ici plus tard si nécessaire
    usage: 'Utilisez ces boutons avec dégradé pour les actions principales dans vos interfaces modernes et visuellement impactantes, tout en ajoutant un contour élégant.',
  },
  
  {
    id: 8,
    title: 'Boutons avec icône',
    description: "Un ensemble de boutons incorporant des icônes représentatives pour différentes actions (connexion, téléchargement, édition, suppression, etc.). Ces boutons combinent texte et icône pour améliorer la clarté de l'action et offrir une meilleure expérience utilisateur.",
    category: 'UI',
    tags: ['interaction', 'clickable', 'button', 'icon', 'action', 'social', 'functional', 'modern'],
    component: (
      <div className="flex gap-4 flex-wrap">
        {/* Boutons sociaux */}
        <SignInWithFacebook label="Facebook" />
        <SignInWithTwiter label="Twitter" />
        <SignInWithGitHub label="GitHub" />
        <SignInWithGoogle label="Google" />
        <SignInWithApple label="Apple" />
        <ConnectWithMetaMask label="MetaMask" />
        <EditButton label="Edit" />
        <DownloadButton label="Download" />

        {/* Boutons fonctionnels */}
        {/*
        <DeleteButton label="Supprimer" />
        <AddButton label="Ajouter" />
        <SearchButton label="Rechercher" /> */}
      </div>
    ),
    code: '', // Tu pourras ajouter le code ici si nécessaire
    usage: 'Utilisez ces boutons pour les actions principales accompagnées d’icônes afin d’améliorer la compréhension visuelle des fonctionnalités dans votre interface.',
  }


];
